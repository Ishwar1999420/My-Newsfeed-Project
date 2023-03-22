var m = 0;
        function show(a) {
            m++;
            var idd = "news" + m;
           // alert(a);
            localStorage.setItem(idd, a);
            //alert("Data Saved");
        }
        function disp(text) {
            const parent = document.getElementById("dv")
            while (parent.firstChild) {
                parent.firstChild.remove()
            }
            getText("https://inshorts.deta.dev/news?category=" + text);

            async function getText(file) {
                let myObject = await fetch(file);
                let myText = await myObject.text();
                const obj = JSON.parse(myText);
                var arrayOfObjects = obj.data;
                for (var i = 0; i < arrayOfObjects.length; i++) {
                    var object = arrayOfObjects[i];
                    var new_div = document.createElement("div");
                    new_div.className = "hello";
                    var newp = document.createElement("p");
                    var bt = document.createElement("button");
                    bt.innerHTML = "<span class='likes'><i class='fas fa-heart'></i><span>";
                    var a = object['author'];

                    newp.innerHTML = "By " + "<span class='bl-a'>"+object['author']+"</span>" + "<span class='cate'> Category  " +"<span class='bl'>"+ obj.category+"</span>"+"</span>" + " <br>" + object['content'];
                    let news = {
                        author: object['author'],
                        content: object['content'].replace(/'/g, ''),
                        cat: obj.category
                    };
                    let newsData = JSON.stringify(news);
                    new_div.appendChild(newp);
                    new_div.appendChild(bt);
                    bt.setAttribute("onclick", "show('" + newsData + "')");
                    var element = document.getElementById("dv");
                    element.appendChild(new_div);

                }

            }

        }