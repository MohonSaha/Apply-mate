
export const customLoader = async() =>{


    const catagoryData = await fetch('data.json');
    const catagorys = await catagoryData.json();


    return {catagorys};

}