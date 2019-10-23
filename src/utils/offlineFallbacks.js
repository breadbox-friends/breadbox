export const renderWithOfflineFallback = (imgSrcThunkable, fallback) => {
  if(process.env["REACT_APP_OFFLINE_MODE"]) {
    return fallback;
  } else {
    return (typeof imgSrcThunkable) === "function" ? imgSrcThunkable() : imgSrcThunkable
  }
}
