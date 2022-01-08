export const setLoading = (state) => {
  if (state) {
    const el = document.getElementById("loader");
    if (el.classList.contains("loaded")) {
      el.classList.remove("loaded")
    }
  } else {
    document.getElementById('loader').classList.add("loaded");
  }
}