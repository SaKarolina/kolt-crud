export default function getNewId () {
    let id = localStorage.getItem('id');
    if (null === id) {
        localStorage.setItem('id', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem('id', id);
    return id;
}