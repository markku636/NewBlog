export default (image, variant) =>{  
  let imageResult = image
    ? image.__typename
      ? image[`${image.__typename}_${variant}`]
      : image[variant]
    : null
    

    return imageResult

  }
