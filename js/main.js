var productArray = [
  {
    productName: 'Freedom',
    description: 'Fits on All Eagles',
    productPrice: '$ FREE',
    imgURL: 'images/eagle.jpg',
  },
  {
    productName: 'Signature Style',
    description: 'Wigs like this will give you all the confidence you need in life! Maybe enough to help you understand git and github?',
    productPrice: '$99.99',
    imgURL: 'images/drOdd.jpg',
  },
  {
    productName: 'Baby Wig',
    description: 'Tired of hairless babies and toddlers? This wig is for you!',
    productPrice: '$40.99',
    imgURL: 'images/baby-toupees.jpeg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Sam',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Julia',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Julia',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Julia',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Ben',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Ben',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Ben',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  }
];

var injectionDOM = '';
var injectPoint = document.getElementById('insertIntoMe');

for (let i = 0; i < productArray.length; i++) {
  

  let injectTitle = '<article class="card"><div class="container"><header><h1>' + productArray[i].productName;
  let injectAnchorURL = '</h1></header><section><a href="' + productArray[i].imgURL;
  let injectImage = '"><img src="' + productArray[i].imgURL;
  let injectDesc = '" class="img-product"></a><p class="desc-text">' + productArray[i].description;
  let injectPrice = '</p></section><section class="pricing"><header><h3>Pricing</h3></header><p>' + productArray[i].productPrice;
  let injectEnd = '</p></section></div></article>';

  injectionDOM += injectTitle + injectAnchorURL + injectImage + injectDesc + injectPrice + injectEnd;

};

injectPoint.innerHTML = injectionDOM;
