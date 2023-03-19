import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#06202A] py-4">
      <div className="flex justify-between items-center mx-auto max-w-4xl px-4">
        <div>
          <img src="https://www.zapit.io/zapit_logo.svg" alt="Logo" className="w-40 h-40" />
        </div>
        <div className="flex space-x-8">
          <a href="https://www.linkedin.com/">
            <img src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
