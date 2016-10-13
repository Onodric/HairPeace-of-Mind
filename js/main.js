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
    productName: 'Better Days Adult',
    description: 'You\'re never too old to relive the "good ol\' days" with our Better Days Experience!<br><em>Covered by MediCare</em>',
    productPrice: '$259.97',
    imgURL: 'images/never-too-old.jpg',
  },
  {
    productName: 'Better Days Child',
    description: 'The future is now with our Better Days Experience Child Edition!<br><em>Covered by most WIC programs</em>',
    productPrice: '$65.37',
    imgURL: 'images/never-too-young.jpg',
  },
  {
    productName: 'Model 241',
    description: 'Our best seller in Portland! Put a bird on it with this outrageous combo deal!',
    productPrice: '$598.71',
    imgURL: 'images/two-for-one.jpg',
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
