<script>
  export let text;

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }
</script>

<a
  use:mitosis_styling={{
    border: "2px solid #000",
    borderRadius: "10px",
    padding: "10px",
  }}
>
  <span>{text}</span>
</a>