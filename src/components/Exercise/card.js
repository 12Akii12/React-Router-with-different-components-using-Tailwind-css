import React from 'react';

const card = (props) => {
    console.log(props)
    return (
        <div class="shadow rounded-lg bg-white m-20 subpixel-antialiased">
            <div class="flex justify-between px-10 py-5 border-b">
                <h3 class="card-title py-2">{props.title}</h3>
                <div class="card-toolbar bg-wild-sand-500 hover:bg-waterloo-500 px-4 py-2 rounded-lg">
                    <button type="button" class="btn btn-sm btn-light ">
                        Action
                    </button>
                </div>
            </div>
            <div class="px-10 py-7 border-b subpixel-antialiased text-md text-gray-500">
                {props.body}
            </div>
            <div class="px-10 py-7 subpixel-antialiased">
                {props.footer}
            </div>
        </div>
    )
}

export default card
