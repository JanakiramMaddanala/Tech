// let divTags = document.querySelectorAll('div');
    // for (const tag of divTags) {
    //     document.write(tag.textContent);
    // }
    let div = document.querySelector('div div');
    console.log(div.id);
    
    // for (const iterator of div) {
    //     alert(iterator);
    // }
    // replace div.outerHTML with <p>...</p>
    // div.innerHTML = '<p>A new element!</p>'; // (*)

    // Wow! The div is still the same!
    // alert(div.innerHTML); // <div>Hello, world!</div>;
    // document.write(document.body.outerHTML);

    // window["elem-content"].style.background = "red";
    // document.write(window["elem-content"].style.background);
    // document.writeln(document.body.parentNode === document.documentElement);
    // document.writeln(document.body.nextSibling == document.head);
    // for (const element of document.body.children) {
    //     document.writeln(element.tagName);
    // }