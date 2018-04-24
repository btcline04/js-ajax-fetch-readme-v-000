const app = "I don't do much.";

const token = '12a82ade89c2065b9681a530c3a0e2f9cd569d2a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
