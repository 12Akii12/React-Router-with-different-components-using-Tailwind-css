import React from 'react'

const badges = (props) => {
    return (
        <div class="flex justify-evenly m-20">
            <span class="bg-white px-4 py-1 rounded-lg">{props.value}</span>
            <span class="bg-purple-heart-500 px-4 py-1 rounded-lg text-white">{props.value}</span>
            <span class="bg-black-haze-500 px-4 py-1 rounded-lg text-black">{props.value}</span>
            <span class="bg-mystic-500 px-4 py-1 rounded-lg text-black">{props.value}</span>
            <span class="bg-emerald-500 px-4 py-1 rounded-lg text-white">{props.value}</span>
            <span class="bg-havelock-blue-500 px-4 py-1 rounded-lg text-white">{props.value}</span>
            <span class="bg-supernova-500 px-4 py-1 rounded-lg text-white">{props.value}</span>
            <span class="bg-cerise-red-500 px-4 py-1 rounded-lg text-white">{props.value}</span>
            <span class="bg-black px-4 py-1 rounded-lg text-white">{props.value}</span>
        </div>
    )
}

export default badges
