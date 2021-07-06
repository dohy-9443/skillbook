document.addEventListener("DOMContentLoaded", () => {
  const lists = document.querySelectorAll(".list");

  function closeAll(item) {
    lists.forEach((list, _) => {
      if (list !== item) {
        list.classList.remove("open");
      }
    });
  }

  lists.forEach((list, _) => {
    list.addEventListener("click", () => {
      closeAll(list);
      list.classList.toggle("open");
    });
  });
});
