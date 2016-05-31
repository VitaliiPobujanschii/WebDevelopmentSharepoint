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
            html += "<div class='contactbubble clearfix>";
            html += "<img src'" + this.PicUrl + "' />";
            html += "<div>";
            html += " <div>";
            html += this.Name;
            html += " </div>";
            html += " <div>";
            html += this.Email;
            html += " </div>";
            html += " <div>";
            html += this.PhoneNum;
            html += " </div>";
            html += "</div>";
            html += "</div>";
            return html;
        };
        return Contact;
    }());
    VitaliisEntities.Contact = Contact;
})(VitaliisEntities || (VitaliisEntities = {}));
