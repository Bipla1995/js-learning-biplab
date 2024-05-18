/*
    Javascript is light weight interpretted and jit compiled programming language
    Interpretted means it translate line by line
    js is also a compiled programing langugae[all lines translated at same time]
    js folloeing 2 types of compiling techniques
        a. JIT just in time programme is compiled in browser
        b. AOT ahead of time compiled in the application before going to browser its compile
        Aot compiles in application : Angular React vue backnone js 
    Js compilers are V8 and babble these are not required if you used HTML
    
    Js is a language which is used with 
    Html         clientside
    NodeJs       ServerSide
    MongoDB      Database
    FLash,3DSMAX Action Script [Animation]

    1st browser when internet started mosaic we used a markup language i.e. GML then SGML then HTML
    Client side script : ECMA Script
    
    1994 NetScape Communicator it used HTML and a language called, ECMA Script
    Netscape appointed "Brendan Eich " to develop a script.
    Brendan Eich develope Mocha then it chenged to LIve Script
    Netscape => Live Script=> Sun Micro System [Java]
    Sun Micro System changed the name Java Script
    
    Script can be embadded into another technology and it can run individually.
    Version = ECMA Script [es5,es6,es7.... es2021]

    What is the role/purpose of js with html
        HTML presents DOM.
        js is used to manipulate dome
            add a elemnet to dom 
            remove element from dom
            change the position of element in dom 
            render new conternt into dom
            update data in dom etc
        js is also use to handle browser actions [BOM]
            Window
            Location
            Navigation
            History
            Document
    Javascript has security issues
    Trozen and virus 
    
    JavaScript Output methods
    ------------------------
    alert() alert has no cancel option 
    confirm() confirm has cancel option but we need to add logic for cancel confirm return true on cancel and on click of 
    console methods [log(), debug(), error(), warn()..]
    document.write()
    innerHTML
    outerHTML
    innerText
    
    document.write()= it can display op a new screen not new page 
    page will be same but op will be on new screen it allows markup all html tag like h2 href
    innerText: it can dispaly output in any record
    innerHtml: it can display html 

    how we can write JS
        inline js 
        embaded js 

        Inline js
        ---------
        js functions are written within the element
        Reusability ISSUes
        separation 

        Embaded
        --------
        you can write js funtions embeded within the page by using <script> elememts
        where to embed we can use in head section or body 
        difernce of writin head and body is ==>if we expection some functions to load into memory and from memory they need to accessed whenever required then we have to keep in with section head 
        
        MIME Type for js will be <script type = "texy/javascript"></script>
        MIME can be text/javascript, text/module, text/bable, text/jsx
        <!-- <script>
     x = 10 // not decalre variable
    document.write(
       'x =' + x
    );
</script> -->
<script>
    "use strict"
     var x = 10 
    document.write(
       'x =' + x
    );
</script>


without folowing standard we are riting code here 
 so strict mode will not allows developers to violate the standards of coding. it will reduce code
 inconsitency 

 how to turn on strict mode you have to write following before any
 function or statement [as 1st line]"use strict";

 faq: how to target js for legacy browsers
      legacy means old browsers , on old version browsser dosent supprot latest version js
      new 2**3 = 8
      old Math.pow(2,3)
      how to target old version
External file 
    js function are writeen in a separate file that have extension ".js"
    you have to link script files by using script element 
    you can access across page 
    faq: what is minification : it reduces the size 
    it is the process of compressing js file we can define prin.min.js
    when to use minified file = uncomressed files are used for development
    minified file are used in production
    What are the issues with js
    1. js is explicitly strictly typed
    2. js is not strongly typed
    3. js is not statically typed
        ex: x = 10 x is number
            x = 'A' x is string
            Age = '2A' valid
    4. js will not supprot complete OOP 
    5. security issues
    6. js depends on lot of dom manipulations
    7. lots of coding 
    8. heavy on application
    9. Explicitly handle browser compatbility
    Solution:
    -TypeScript 
    How hs take control over html elements?
    ans: by using various refernce methods
        1. By using DOM Hierarchy 
        prompt("your message", "default value")
 prompt("your message")
 click ok without value : return empty string " "
 click ok with value : return value
 click cancel : return null
 for input elements you can use HTM form elements for input
    a.Textbox
    b.CheckBox
    c.Radio
    d.ListBox etc



*/