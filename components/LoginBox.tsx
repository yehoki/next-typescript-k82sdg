import React from 'react';

type Props = {};

function LoginBox({}: Props) {
  return (
    <div className="container px-6 h-screen">
      <div className="flex justify-center items-center flex-wrap h-full">
        <div className="">
          <form className="space-y-2" onSubmit={(e) => console.log(e)}>
            <div>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <button className="border rounded-full px-2 py-1">1234</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
