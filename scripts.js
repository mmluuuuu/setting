// 切換畫面用的函式
function showPage(showId, hideId) {
    document.getElementById(showId).classList.add("active");
    document.getElementById(hideId).classList.remove("active");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const showProfileBtn = document.getElementById("showProfile");
    const showSettingBtn = document.getElementById("showSetting");
    const showNotificationBtn = document.getElementById("showNotification");
    const backfromNotifyBtn=document.getElementById("backToSettingfromNotify");
    const showHelpBtn = document.getElementById("showHelp");
    const backfromHelpBtn=document.getElementById("backToSettingfromHelp");
    const showAboutBtn = document.getElementById("showAbout");
    const backfromAboutBtn=document.getElementById("backToSettingfromAbout");

    if (showProfileBtn) {
      showProfileBtn.addEventListener("click", function () {
        showPage("profile-content", "settings-page");
      });
    }

    if (showSettingBtn) {
      showSettingBtn.addEventListener("click", function () {
        showPage("settings-page", "profile-content");
      });
    }

    if (showNotificationBtn) {
        showNotificationBtn.addEventListener("click", function () {
          showPage("notification-content", "settings-page");
        });
      }

    if (backfromNotifyBtn) {
        backfromNotifyBtn.addEventListener("click", function () {
          showPage("settings-page", "notification-content");
        });
      }

      if (showHelpBtn) {
        showHelpBtn.addEventListener("click", function () {
          showPage("help-content", "settings-page");
        });
      }

    if (backfromHelpBtn) {
        backfromHelpBtn.addEventListener("click", function () {
          showPage("settings-page", "help-content");
        });
      }

      if (showAboutBtn) {
        showAboutBtn.addEventListener("click", function () {
          showPage("about-content", "settings-page");
        });
      }

    if (backfromAboutBtn) {
        backfromAboutBtn.addEventListener("click", function () {
          showPage("settings-page", "about-content");
        });
      }
  });

function logout() {
    alert("您已登出");
    window.location.href = "index.html";
}

function savechange() {
    alert("已儲存變更");
}

document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".settings-item").forEach(item => {
item.addEventListener("click", function () {
    const page = this.getAttribute("data-page");
    if (page) {
        window.location.href = page;
    }
});
});
});

document.addEventListener("DOMContentLoaded", function () {
    const notifyToggle = document.getElementById("notifyToggle");

    notifyToggle.addEventListener("change", function () {
      if (notifyToggle.checked) {
        console.log("通知：開啟");
      } else {
        console.log("通知：關閉");
      }
    });
  });