function openPopupWindow(url: string, width: number, height: number) {
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
  
    const options = `width=${width},height=${height},left=${left},top=${top}`;
    window.open(url, '_blank', options);
  }
  
  // Example usage
  const popupUrl = 'https://github.com';
  const popupWidth = 500;
  const popupHeight = 400;
  
  openPopupWindow(popupUrl, popupWidth, popupHeight);