import React, { useState } from 'react'

const Multipleimage = () => {

  const [image, setimage] = useState('')
  const [multipleimage, setmultipleimage] = useState([]);


  const handleimageupload = (e) => {
    const data = e.target.files[0]
    setimage(data)
  }


  const handlemultiple = (e) => {
    const newmultiples = e.target.files
    setmultipleimage([...multipleimage, ...newmultiples])
  }


  return (


    <div className="Imageupload  d-flex justify-content-center">

      <form  >
        <div className="singlephoto">
          <div className='d-flex justify-content-center'>
            {image ?
              <img width={50} height={50} src={URL.createObjectURL(image)} alt="" />
              : ""
            }
          </div>

          <input type="file"
            style={{ color: "white" }}
            onChange={handleimageupload}
            name=''
            id=''
            
          />
        </div>

        <div className="multiplephoto mt-3">

          <div>
            {
              multipleimage.map((item, c) => {
                return (
                  <img width={50} height={50} src={URL.createObjectURL(item)} alt=""
                    onClick={() => {
                      const result = multipleimage.filter((cd) => cd !== item);
                      setmultipleimage(result)
                    }}
                  />

                )
              })
            }
          </div>

          <input type="file"
            onChange={handlemultiple}
            name=''
            id=''
            multiple
          />

        </div>


      </form>
    </div>

  )
}

export default Multipleimage