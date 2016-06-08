/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

module VitaliisEntities {

    export class Contact {
        Name: string;
        PicUrl: string;
        PhoneNum: string;
        Email: string;
      

        constructor(name: string, picUrl: string, phone: string, email: string) {
            this.Name = name;
            this.PicUrl = picUrl;
            this.PhoneNum = phone;
            this.Email = email;
          
        }
          
        GenerateHTML(): string {
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
        }
    }
}
