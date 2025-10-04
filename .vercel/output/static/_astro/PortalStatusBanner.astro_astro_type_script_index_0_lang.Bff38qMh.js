class PortalStatusBanner {
  banner;
  statusDot;
  statusPulse;
  statusTitle;
  statusMessage;
  refreshBtn;
  closeBtn;
  isOnline;
  isChecking;
  constructor() {
    this.banner = document.getElementById("portal-status-banner");
    this.statusDot = document.getElementById("status-dot");
    this.statusPulse = document.getElementById("status-pulse");
    this.statusTitle = document.getElementById("status-title");
    this.statusMessage = document.getElementById("status-message");
    this.refreshBtn = document.getElementById("refresh-status");
    this.closeBtn = document.getElementById("close-status");
    this.isOnline = null;
    this.isChecking = false;
    this.init();
  }
  init() {
    const dismissed = localStorage.getItem("dccp-portal-status-dismissed");
    if (dismissed) {
      this.hideBanner();
      return;
    }
    this.showBanner();
    this.checkPortalStatus();
    this.refreshBtn?.addEventListener("click", () => this.checkPortalStatus());
    this.closeBtn?.addEventListener("click", () => this.dismissBanner());
    setInterval(() => {
      if (!this.isChecking) {
        this.checkPortalStatus();
      }
    }, 5 * 60 * 1e3);
  }
  showBanner() {
    this.banner?.classList.add("show");
  }
  hideBanner() {
    this.banner?.classList.remove("show");
  }
  dismissBanner() {
    this.hideBanner();
    localStorage.setItem("dccp-portal-status-dismissed", "true");
  }
  setStatus(status, title, message) {
    this.statusDot?.classList.remove("checking", "online", "offline");
    this.statusPulse?.classList.remove("checking", "online", "offline");
    this.statusDot?.classList.add(status);
    this.statusPulse?.classList.add(status);
    if (this.statusTitle) this.statusTitle.textContent = title;
    if (this.statusMessage) this.statusMessage.textContent = message;
  }
  setChecking() {
    this.isChecking = true;
    this.refreshBtn?.classList.add("loading");
    this.refreshBtn?.setAttribute("disabled", "true");
    this.setStatus("checking", "Checking Portal Status...", "Please wait while we verify the portal availability.");
  }
  setOnline() {
    this.isChecking = false;
    this.isOnline = true;
    this.refreshBtn?.classList.remove("loading");
    this.refreshBtn?.removeAttribute("disabled");
    this.setStatus("online", "Portal is Online", "portal.dccp.edu.ph is accessible and ready for use.");
  }
  setOffline() {
    this.isChecking = false;
    this.isOnline = false;
    this.refreshBtn?.classList.remove("loading");
    this.refreshBtn?.removeAttribute("disabled");
    this.setStatus("offline", "Portal is Currently Offline", "The DCCP Portal is experiencing connectivity issues (Cloudflare Tunnel error). Please try again later or contact IT support.");
  }
  async checkPortalStatus() {
    if (this.isChecking) return;
    this.setChecking();
    const isOnline = await this.tryMultipleChecks();
    if (isOnline) {
      this.setOnline();
    } else {
      this.setOffline();
    }
  }
  async tryMultipleChecks() {
    const checks = await Promise.allSettled([
      this.checkWithImage(),
      this.checkWithDifferentImage()
    ]);
    const successCount = checks.filter(
      (result) => result.status === "fulfilled" && result.value === true
    ).length;
    return successCount >= 1;
  }
  async checkWithImage() {
    return new Promise((resolve) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        resolve(false);
      }, 5e3);
      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
      img.src = "https://portal.dccp.edu.ph/favicon.ico?" + Date.now();
    });
  }
  async checkWithDifferentImage() {
    return new Promise((resolve) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        resolve(false);
      }, 5e3);
      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
      img.src = "https://portal.dccp.edu.ph/robots.txt?" + Date.now();
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new PortalStatusBanner();
});
