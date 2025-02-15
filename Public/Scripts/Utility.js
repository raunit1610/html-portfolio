//Link Opening Blink
const blink = document.querySelectorAll('.diff');
Array.from(blink).forEach(element => {
    element.addEventListener('click', function() {
        const originalColor = this.style.color;
        this.style.color = 'red';
        setTimeout(() => {
            this.style.color = originalColor;
        }, 500); // Change the duration as needed
    });
});

//Menu Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    if (navbar.style.display === 'inline') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'inline';
    }
};

//Form Submition
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mob_number = "+917766862828";
    const e_mail = "raunitraj2018@gmail.com";

    // Create a new workbook and add data to it
    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Full Name", "Email", "Phone Number", "Subject", "Message", "Raunit's Number", "E-Mail"],
        [fullName, email, phoneNumber, subject, message, mob_number, e_mail]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Contact Data");

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, "ContactData.xlsx");
    window.alert("Thank You For Contacting! My Phone Number and Email id Is Provided in Excel Sheet!");
});
