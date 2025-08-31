// This script replaces Obsidian-style image links (![[filename.png]]) with <img> tags in the rendered HTML after page load.
document.addEventListener('DOMContentLoaded', function () {
	// Regex to match ![[filename.ext]]
	const obsidianImgRegex = /!\[\[([^\]]+\.(png|jpg|jpeg|gif|svg))\]\]/gi;

	// Function to replace in a text node
	function replaceObsidianImages(node) {
		if (node.nodeType === Node.TEXT_NODE) {
			const matches = node.textContent.match(obsidianImgRegex);
			if (matches) {
				// Create a fragment to hold new nodes
				const frag = document.createDocumentFragment();
				let lastIndex = 0;
				let text = node.textContent;
				obsidianImgRegex.lastIndex = 0; // Reset regex state
				let match;
				while ((match = obsidianImgRegex.exec(text)) !== null) {
					// Add text before the match
					if (match.index > lastIndex) {
						frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
					}
					// Create <img> element
					const img = document.createElement('img');
					img.src = './../../assets/' + match[1]; // Adjust path if needed
					img.alt = match[1];
					frag.appendChild(img);
					lastIndex = obsidianImgRegex.lastIndex;
				}
				// Add any remaining text
				if (lastIndex < text.length) {
					frag.appendChild(document.createTextNode(text.slice(lastIndex)));
				}
				// Replace the original text node
				node.parentNode.replaceChild(frag, node);
			}
		} else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
			// Recursively process child nodes, but skip <code> and <pre>
			if (['CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(node.tagName)) return;
			Array.from(node.childNodes).forEach(replaceObsidianImages);
		}
	}

	// Start from the main content area (adjust selector as needed)
	const content = document.querySelector('.md-content, .content, main, body');
	if (content) {
		replaceObsidianImages(content);
	}
});
