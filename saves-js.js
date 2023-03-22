for (const key in localStorage) {
    // Check if the key is a property of the localStorage object
    if (localStorage.hasOwnProperty(key)) {
      // Retrieve the value for the key and log it to the console
      const values = localStorage.getItem(key);
      document.write("<div class='save'>");
      document.write((`${key}: ${values}`));
      document.write("<span><i class='fas fa-heart'></i></span>");
  
      document.write("</div>");
    }
  }