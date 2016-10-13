var productArray = [
  {
    productName: 'Zachs',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Zach',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'Zach',
    description: 'one wig',
    productPrice: '$ one million dollars',
    imgURL: 'http://gloimg.rosegal.com/rosegal/2015/201510/source-img/1444260653640-P-3219754.jpg',
  },
  {
    productName: 'The Politician',
    description: 'Elegant wig that will inspire your new political career',
    productPrice: '$1,000,000,000.00',
    imgURL: 'images/thePolitician.jpg',
  },
  {
    productName: 'The Charmer',
    description: 'Seductive piece that will have you updating your MySpace relationship status in no time',
    productPrice: '$69.99',
    imgURL: 'images/theCharmer.jpg',
  },
  {
    productName: 'Lego Fantasy',
    description: 'A modern style that\'s both fun and functional' ,
    productPrice: '$1,234.56',
    imgURL: 'images/legoWig.jpg',
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
