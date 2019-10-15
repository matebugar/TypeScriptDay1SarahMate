var menuu : Array<{image: string,name: string, description: string, rating: number}> = dishes;
console.table(dishes);

for (let i=0; i< menuu.length; i++) {
	document.getElementById("dishDisplay").innerHTML += 
		`<div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="${menuu[i].image}" alt="">
          <div class="card-body">
            <h4 class="card-title">${menuu[i].name}</h4>
            <p class="card-text">${menuu[i].description}</p>
          </div>
          <div class="card-footer">
            <p>Rating: ${menuu[i].rating}</p>
          </div>
        </div>
      </div>`;
};