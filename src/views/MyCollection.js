
import Header from "../components/general/Header"
import UploadForm from "../components/collection-components/ImgUploadForm"
import ImageGrid from "../components/collection-components/ImgWrap"

const  MyCollection = () => {
    return(
        <div>
            <Header />
            <div  className="App">
                <p>* you can upload any png or jpg image from your device (it will be cropped to be sqaure)</p>
                <UploadForm />
                <ImageGrid  />
            </div>
        </div>
    )
}

export default MyCollection;