
const enquiryForm = document.getElementById("enquiryForm");
const enquiryResult = document.getElementById("enquiryResult");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const type = document.getElementById("enquiryType").value;
        const message = document.getElementById("message").value.trim();

        // BASIC VALIDATION
        if (!name || !type || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        let response = "";

        switch (type) {
            case "custom-cake":
                response = "Estimated price for a custom cake starts from **R350 to R1500**, depending on size and design.";
                break;
            case "bulk-order":
                response = "Bulk orders qualify for discounts of 10–25%. We'll confirm exact pricing based on quantity.";
                break;
            case "catering":
                response = "Catering services start from **R200 per person**. Availability depends on your event date.";
                break;
            default:
                response = "Thank you for your enquiry! We will respond shortly with more details.";
        }

        enquiryResult.style.display = "block";
        enquiryResult.innerHTML = `
            <h3>Thank You, ${name}!</h3>
            <p>${response}</p>
            <p><strong>Your message:</strong> ${message}</p>
            <p>We’ll reply to you at <strong>${document.getElementById("email").value}</strong>.</p>
        `;
        
        enquiryForm.reset();
    });
}

const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("cname").value.trim();
        let email = document.getElementById("cemail").value.trim();
        let type = document.getElementById("ctype").value;
        let message = document.getElementById("cmessage").value.trim();

        if (!name || !email || !type || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Build the email
        let mailBody = `
Message Type: ${type}
From: ${name}
Email: ${email}

Message:
${message}
        `;

        contactResult.style.display = "block";
        contactResult.innerHTML = `
            <h3>Message Ready to Send</h3>
            <p>Your message has been compiled. Click below to send using your email app:</p>
            <a class="btn" href="mailto:info@sweetcravings.co.za?subject=${encodeURIComponent(type)}&body=${encodeURIComponent(mailBody)}">
                Send Email
            </a>
        `;

        contactForm.reset();
    });
}
