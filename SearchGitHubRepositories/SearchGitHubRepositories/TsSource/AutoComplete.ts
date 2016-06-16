/// <reference path="getrepo.ts" />


namespace Myspace {
    export class AutoComplete {
        static Init() {
            $('#SearchInput').keyup(AutoComplete.TextBoxChanged);
        }

        static TextBoxChanged() {
            AutoComplete.Delay(function () {
                github.RepositoryInfo.RenderRepositories();
                
            }, 1000);
        }
        static Delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();
    }
}

$(document).ready(() => {
    Myspace.AutoComplete.Init();
});