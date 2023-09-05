import {extensionElements} from "~/constant/element";

export const displayElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.display = 'block'
  }
}

export const hideElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.display = 'none'
  }
}

export const makeElementTransparent = (elementId: string, transparentValue: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.opacity = transparentValue
  }
}

export const excludeElement = (event: any) => {
  const extensionElementsList = Object.values(extensionElements)
  if (extensionElementsList.includes(event.target.className)) {
    return true
  }
  return false
}
export const moveElement = (element: string) => {
  const iframeEle = document.getElementById(element)
  if (iframeEle) {
    let offsetX: number, offsetY: number;
    let isDragging = false;
    iframeEle.addEventListener('dragstart', (e) => {
      isDragging = true
      offsetX = e.clientX - iframeEle.getBoundingClientRect().left;
      offsetY = e.clientY - iframeEle.getBoundingClientRect().top;
    })

    document.addEventListener('drag', (e) => {
      if (e.target === iframeEle && isDragging) {
        e.preventDefault();
      }
    });

    document.addEventListener('dragover', (e) => {
      if (isDragging) {
        e.preventDefault();
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;

        // Calculate boundaries
        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - iframeEle.offsetWidth;
        const maxY = window.innerHeight - iframeEle.offsetHeight;

        // Keep the draggableDiv within boundaries
        const boundedLeft = Math.min(Math.max(left, minX), maxX);
        const boundedTop = Math.min(Math.max(top, minY), maxY);
        iframeEle.style.left = boundedLeft + 'px';
        iframeEle.style.top = boundedTop + 'px';
      }
    });

    document.addEventListener('drop', (e) => {
      if (isDragging) {
        isDragging = false
        e.preventDefault();
      }
    });
  }
}
