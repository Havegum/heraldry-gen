
<button on:click>
  <svg viewBox="0 0 100 100">
    <path xmlns="http://www.w3.org/2000/svg" transform="translate(0 10)" fill="currentColor" d="M87.34,62.53a3.5,3.5,0,0,0-4.48,2.11A33.44,33.44,0,0,1,75,77.06a33.76,33.76,0,1,1-.3-48l-15.59,0a3.5,3.5,0,0,0,0,7h0l23-.06a3.5,3.5,0,0,0,3.49-3.49l.06-23a3.5,3.5,0,0,0-3.49-3.51h0a3.5,3.5,0,0,0-3.5,3.49l0,13.56A40.73,40.73,0,1,0,79.91,82a40.39,40.39,0,0,0,9.53-15A3.5,3.5,0,0,0,87.34,62.53Z"/>
  </svg>
  <span><slot/></span>
</button>


<style>
button, svg {
  border: none;
}

svg {
  display: block;
  height: 1em;
  width: 1em;
  margin-right: .25em;
  overflow: visible
}

button {
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  padding: .25em .75em;
  border-radius: 20em;
  margin-bottom: .25em;

  opacity: .5;

  transition:
    background-color ease-out 50ms,
    opacity ease-out 50ms;
}

button:active,
button:hover {
  opacity: 1;
}

button:hover {
  background-color: rgba(255,255,255,0.03922);
}

button:active {
  background-color: rgba(255,255,255,0.1);
}
</style>
