let songs = [];

const form = document.querySelector('form');
const showList = document.querySelector('.show_list');

function showSong() {
    const html = songs.map(song => {
        return `
        <ul>
            <li><img src="./assets/img/download (2).jpg" alt="westlife"></li>
            <li>
                <ul>
                    <li><h2>Title: ${song.title}</h2></li>
                    <li><small>Style: ${song.style}</small></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h2>Name: ${song.name}</h2></li>
                    <li><small>Length: ${song.length}</small></li>
                </ul>
            </li>
            <li><h2 class="score">SCORE: 0</h2></li>
            <li><button value="${song.id}" class="add_score">+1</button></li>
            <li>
                <button value="${song.id}" class="delete" aria-label="delete song ${song.title}">
                    <img src="./assets/img/trash.svg" alt="delete the ${song.id}">
                </button>
            </li>
        </ul>
        `;
    }).join("");
    showList.innerHTML = html;
}
// Calling the function
showSong();

// Creating a new object to store the value from the users
const addSong = (e) => {
    e.preventDefault();
    formitem = e.currentTarget;
    const newSong = {
        title: formitem.title.value,
        name: formitem.name.value,
        style: formitem.style.value,
        length: formitem.length.value,
        picture: formitem.picture.value,
        id: Date.now(),
    };
    // Push the new object into the big array of object
    songs.push(newSong);
    // Running the dispatcheEvent in order to reun this function
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    showSong();
    // Reset the form
    formitem.reset();
};


// Handle with the add click button from the form
const handleClick = e => {
    const scoreValue = e.target.closest(".score");
    const addingScore = e.target.closest(".add_score");
    if (addingScore) {
        const id = Number(addingScore.value);
        addingScoreSong(id);
    }

    const deleteBtn = e.target.closest(".delete");
    if (deleteBtn) {
        const id = Number(deleteBtn.value);
        deleteSong(id);
    }
};

// addingScoreSong.addEventListener('click', addingScoreSong);

const addingScoreSong = idAddSong => {
    // songs = songs.filter(song => song.id !== idAddSong);
    console.log('I have got it');
}

// Filtering the items by removing the one which has the matched id 
const deleteSong = idDelete => {
    // Matching the id of the id to be deleted
    songs = songs.filter(song => song.id !== idDelete);
    console.log(songs);
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
}

// Incrementing the score any time the score button is ckicked
const score = (e) => {
    const addingScore = e.target.closest(".add_score");
    increment(id);
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    console.log(e);
    addingScore.addEventListener("click", increment);
};

// Increment the score
const increment = e => {
    const score = e.target.closest("score");
    score.addEventListener("click", )
    if (score) {
        const value = score.value +1;
        console.log(value);
    }
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    score();
}

// Grabbing these necessary elements
const inputFilterTitle = document.querySelector('.filter_title');
const resetBtnFilter = document.querySelector('.reset_filter');

// Filter the songs by its title
const searchSongFilterTitle = e => {
    const filterdata = songs.filter(song => song.title.toLowercase().includes(inputFilterTitle.toLowercase()));
    showSong(filterdata);
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    console.log("I have got to go");
};

// Filter the songs by using its style
const searchSongFilterStyle = () => {};

// Reset the fitler after filter the songs
const resetFilter = () => {
    console.log("I do not like being called with that name");
    showSong();
};
resetBtnFilter.addEventListener('click', resetFilter);

// Mirror the data to the local storage
const mirrorToLocalStorage = () => {
    localStorage.setItem('songs', JSON.stringify(songs));
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
};
// Save the data into the local storage
const restoreFromLocalStorage = () => {
    const songLists = JSON.parse(localStorage.getItem('songs'));
    console.log("hello", songLists);
    if(!songLists) {
        songs = [];
    } else {
        songs = songLists;
    }
};

form.addEventListener('submit', addSong);
showList.addEventListener('songListUpdated', showSong);
window.addEventListener('DOMContentLoaded', showSong);
showList.addEventListener('click', handleClick);
showList.addEventListener('songListUpdated', mirrorToLocalStorage);
restoreFromLocalStorage();