let HEADER = new Vue ({
    el : '.wrapper',
    data : {
        OpenBurger : false,
        Scrolling : 0,
        StyleType : {
            HEAD : false,
            ABOUTME : false,
            SKILLS : false,
            PORTFOLIO : false,
            CONTACTS : false
        }
    },
    created : function () { this.ListeningToEvents() },
    methods: {
        OpenBurgerToggle() { this.OpenBurger = !this.OpenBurger },

        CloseBurger() { this.OpenBurger = false },

        SearchAndDisable(NAME) {
            let KEYS = Object.keys(this.StyleType);
            for (let i = 0; i < KEYS.length; i++) {
                if (NAME != KEYS[i]) { this.StyleType[KEYS[i]] = false }
            }
        },
        ListeningToEvents() {
            window.addEventListener('scroll', this.SetStyleHeader)
        },
        SetStyleHeader : function (e) {
            Scrolling = e.srcElement.scrollingElement.scrollTop;
            if (Scrolling >= 0 && Scrolling < 400) {
                this.StyleType.HEAD = true;
                this.SearchAndDisable('HEAD');
            }else if (Scrolling >= 400 && Scrolling < 850) {
                this.StyleType.ABOUTME = true;
                this.SearchAndDisable('ABOUTME');
            }else if (Scrolling >= 850 && Scrolling < 1400) {
                this.StyleType.SKILLS = true;
                this.SearchAndDisable('SKILLS');
            }else if (Scrolling >= 1400 && Scrolling < 3850) {
                this.StyleType.PORTFOLIO = true;
                this.SearchAndDisable('PORTFOLIO');
            }else if (Scrolling >= 3850) {
                this.StyleType.CONTACTS = true;
                this.SearchAndDisable('CONTACTS');
            }
        }
    }
})