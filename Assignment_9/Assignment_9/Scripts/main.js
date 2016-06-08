/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var VitaliisEntities;
(function (VitaliisEntities) {
    var Contact = (function () {
        function Contact(name, picUrl, phone, email) {
            this.Name = name;
            this.PicUrl = picUrl;
            this.PhoneNum = phone;
            this.Email = email;
        }
        Contact.prototype.GenerateHTML = function () {
            var html = "";
            html += "<div class='contactbubble clearfix'>";
            html += "<img src='" + this.PicUrl + "' />";
            html += " <div>";
            html += "  <div>";
            html += this.Name;
            html += "  </div>";
            html += "  <div>";
            html += this.Email;
            html += "  </div>";
            html += "  <div>";
            html += this.PhoneNum;
            html += "  </div>";
            html += " </div>";
            html += "</div>";
            return html;
        };
        return Contact;
    }());
    VitaliisEntities.Contact = Contact;
})(VitaliisEntities || (VitaliisEntities = {}));
/// <reference path="contact.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
(function () {
    // Similar to PageLoad.. 
    // Waits for page to load then executes the script
    $(document).ready(function () {
        // gets the button
        var buttonElement = $('#addContact');
        // add click event to button. when clicked
        // the AddContactFunction will be called
        buttonElement.click(AddContact);
    });
    // function adds the new contact to the page
    function AddContact() {
        // get the resultsDiv to where we will put our contact
        var resultsDiv = $('#results');
        // get contact values from the form
        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var mobileValue = $('#mobile').val();
        var imageUrlValue = $('#imageUrl').val();
        ;
        var contact = new VitaliisEntities.Contact(nameValue, imageUrlValue, mobileValue, emailValue);
        // append your html to the results div
        // so you get a new item 
        resultsDiv.append(contact.GenerateHTML());
    }
})();
//# sourceMappingURL=main.js.map