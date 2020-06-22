geotab.addin.helloworld = () => {
    // Initialize required Add-In variables
    // Example:
    // var element = document.getElementById("myButton");
    // if (element) {
    //     element.addEventListener("click", function (event) {
    //         event.preventDefault();
    //         alert("Action performed");
    //     });
    // }

    // let btnDisplayOutput = document.getElementById('btnDisplayOutput');
    // let outputDiv = document.getElementById('output');

    // btnDisplayOutput.addEventListener('click', function(){
    //     outputDiv.innerHTML = 'Heres hoping this works';
    // });

    return {
     initialize(api, state, callback) {



      callback();
     },
     focus(api, state) {
      // User interface is available
     },
     blur(api, state) {
      // Save any Add-In state
     }
    };
   };