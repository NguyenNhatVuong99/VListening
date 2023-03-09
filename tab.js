const tabs = document.querySelectorAll.bind(document)(".tab-item");
const panes = document.querySelectorAll.bind(document)(".tab-pane");

const tabActive = document.querySelector.bind(document)(".tab-item.active");
const line = document.querySelector.bind(document)(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        document.querySelector.bind(document)(".tab-item.active").classList.remove("active");
        document.querySelector.bind(document)(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});
