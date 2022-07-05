import React from "react";
import {createRoot}  from 'react-dom/client';
import Routing from './routing';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const root = createRoot(document.getElementById("root"))
    root.render
    (
    <Routing />
    );

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
        
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
        }
        
        window.addEventListener("scroll", reveal);

        // Back to top button

        let mybutton = document.getElementById("btn-back-to-top");

            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function () {
            scrollFunction();
            };

            function scrollFunction() {
            if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
            ) {
            mybutton.style.display = "block";
            } else {
            mybutton.style.display = "none";
            }
            }
            // When the user clicks on the button, scroll to the top of the document
            mybutton.addEventListener("click", backToTop);

            function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }

            // contact from js
