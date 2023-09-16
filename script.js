<!DOCTYPE html>
<html>
<head>
    <title>Text Rewriter</title>
</head>
<body>
    <div id="output"></div>

    <script>
        // Define the input text to be rephrased
        var inputText = "Enter the text you want to rephrase here.";

        // Make an AJAX request to the text rewriting API
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.example.com/rewrite", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Process the rephrased output
                var rephrasedText = JSON.parse(xhr.responseText).rephrasedText;
                document.getElementById("output").innerHTML = rephrasedText;
            }
        };

        xhr.send(JSON.stringify({ text: inputText }));
    </script>

About 

    // Handle form submission for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var email = document.getElementById('email').value;
    var request = document.getElementById('request').value;
  
    // Compose email message
    var contactMessage = 'Email: ' + email + '\nRequest: ' + request;
  
    // Simulate sending the email
    sendEmail('rewriter.ai@gmail.com', 'Contact Form Submission', contactMessage);
  
    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('request').value = '';
  
    // Show success message (optional)
    alert('Thank you for your message! We will get back to you soon.');
  });
  
  // Handle form submission for the hire-me form
  document.getElementById('hire-me-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var hireEmail = document.getElementById('hire-email').value;
    var hireRequirements = document.getElementById('hire-requirements').value;
  
    // Compose email message
    var hireMeMessage = 'Email: ' + hireEmail + '\nRequirements: ' + hireRequirements;
  
    // Simulate sending the email
    sendEmail('rewriter.ai@gmail.com', 'Hire Me Form Submission', hireMeMessage);
  
    // Clear form fields
    document.getElementById('hire-email').value = '';
    document.getElementById('hire-requirements').value = '';
  
    // Show success message (optional)
    alert('Thank you for your interest! We will be in touch with you shortly.');
  });
  
  // Simulate sending an email
  function sendEmail(toEmail, subject, message) {
    // In this example, we are not actually sending the email.
    // You would need to implement the email sending functionality on your server-side using appropriate APIs or libraries.
    // The code here serves as a placeholder to demonstrate the form submission.
  
    console.log('Email Sent:');
    console.log('To: ' + toEmail);
    console.log('Subject: ' + subject);
    console.log('Message: ' + message);
  }
  
contact
// Handle form submission for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var email = document.getElementById('email').value;
    var request = document.getElementById('request').value;
  
    // Compose email message
    var contactMessage = 'Email: ' + email + '\nRequest: ' + request;
  
    // Simulate sending the email
    sendEmail('rewriter.ai@gmail.com', 'Contact Form Submission', contactMessage);
  
    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('request').value = '';
  
    // Show success message (optional)
    alert('Thank you for your message! We will get back to you soon.');
  
    // Scroll to the contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle form submission for the hire-me form
  document.getElementById('hire-me-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var hireEmail = document.getElementById('hire-email').value;
    var hireRequirements = document.getElementById('hire-requirements').value;
  
    // Compose email message
    var hireMeMessage = 'Email: ' + hireEmail + '\nRequirements: ' + hireRequirements;
  
    // Simulate sending the email
    sendEmail('rewriter.ai@gmail.com', 'Hire Me Form Submission', hireMeMessage);
  
    // Clear form fields
    document.getElementById('hire-email').value = '';
    document.getElementById('hire-requirements').value = '';
  
    // Show success message (optional)
    alert('Thank you for your interest! We will be in touch with you shortly.');
  
    // Scroll to the contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Simulate sending an email
  function sendEmail(toEmail, subject, message) {
    // In this example, we are not actually sending the email.
    // You would need to implement the email sending functionality on your server-side using appropriate APIs or libraries.
    // The code here serves as a placeholder to demonstrate the form submission.
  
    console.log('Email Sent:');
    console.log('To: ' + toEmail);
    console.log('Subject: ' + subject);
    console.log('Message: ' + message);
  }


  {  cancelAnimationFrame 0
    ''
  }

</body>
</html>
''

