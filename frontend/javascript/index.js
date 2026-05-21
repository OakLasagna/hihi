document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('uploadButton').addEventListener('click', async () =>{
        let form = document.getElementById('carForm');
        let formData = new FormData(form);
        try{
            await postFetch('/api/uploadCar', formData);
        } catch (error) {
            console.error('Error uploading car:', error);
        }
    });
});

const getFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

const postFetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
};
