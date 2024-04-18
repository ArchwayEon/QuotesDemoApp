"use strict";

export class DOM {
    // Creates a <TD> DOM element and inserts text node into it.
    // text : string
    // Returns: Element
    createTextTD(text) {
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(text));
        return td;
    }

    // Creates a <TR> DOM element and inserts a <TD> element into it.
    // src : string - URL of the image
    // alt : string - The alternative text for the image
    // Returns: Element
    createImageTR(src, alt) {
        const tr = document.createElement("tr");
        const td = this.createImageTD(src, alt);
        td.setAttribute("colspan", "4");
        tr.appendChild(td);
        return tr;
    }

    // Creates a <TD> DOM element and inserts an <IMG> element into it.
    // src : string - URL of the image
    // alt : string - The alternative text for the image
    // Returns: Element
    createImageTD(src, alt) {
        const td = document.createElement("td");
        const img = this.createImg(src, alt);
        td.appendChild(img);
        return td;
    }

    // Creates an <IMG> DOM element.
    // src : string - URL of the image
    // alt : string - The alternative text for the image
    // Returns: Element
    createImg(src, alt) {
        const img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt);
        return img;
    }

    // Creates an <A> DOM element with a text node.
    // url : string - URL of the link
    // text : string
    // Returns: Element
    createTextLink(url, text) {
        const a = document.createElement("a");
        a.setAttribute("href", url);
        a.appendChild(document.createTextNode(text));
        return a;
    }

    // Removes all the children of element
    // element : Element
    removeChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    // Creates a text node and appends it to the element with id elementId
    // elementId : string - CSS id selector 
    // text : string
    setElementText(elementId, text) {
        const element = document.querySelector(elementId);
        element.appendChild(document.createTextNode(text));
    }

    // Sets the value of the element with id elementId
    // elementId : string - CSS id selector
    // value : any
    setElementValue(elementId, value) {
        const element = document.querySelector(elementId);
        element.value = value;
    }
}
