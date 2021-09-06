function card() {

      function card(r,s) {
          this.rank = r;
          this.suit = s;
      }

      this.order = [
      new card('1','first'), new card('2','second'), new card('3','third'), new card('4','second'), new card('5','third'),
      new card('6','fourth'), new card('7','fourth'), new card('8','first'), new card('9','third')
      ];

  }

  $(document).ready(function(){
                      let d;

                      function cardDOM(c,m) {
                          if(c) {
							 
                             return $('<div class="card ' + c.suit + '"' + (m?' style="margin-right:'+m+';"':'') + '><div class="top_num">' + c.rank + '</div></div>');
                          }
                      }
					  
                      /****** cards display *******/ 
					$("#cards").html('');
                          d = new card();
                          d.order;
                          for(i=0;i<d.order.length;i++) {
                              $('#cards').append(cardDOM(d.order[i]));
                          }
						  
				     
                  
					  
				/***** shuffle card ******/	  
              $("#shuffle_card").click(function(){
                          if(d) {
                               for (var i = 0; i < d.order.length; i++) {
              var j = i;
              while (j==i) {
                  j = Math.floor(Math.random() * d.order.length);
              }
              var tmp = d.order[i];
              d.order[i] = d.order[j];
              d.order[j] = tmp;
          }
                              $("#cards").html('');
                              for(i=0;i<d.order.length;i++) {
                                  $('#cards').prepend(cardDOM(d.order[i],"-8px"));
                              }
                          }
                          return false;
                      });
					  
					  
                $("#sort_card").click(function(){
                          if(d) {
                               for (var i = 0; i < d.order.length; i++) {
			             var j = d.order.findIndex(function (elem , index) {
                        return elem.rank === (i + 1).toString() ;
                              });
            
              var tmp = d.order[i];
              d.order[i] = d.order[j];
              d.order[j] = tmp;
          }
                              $("#cards").html('');
                              for(i=0;i<d.order.length;i++) {
                                  $('#cards').append(cardDOM(d.order[i],"-8px"));
                              }
                          }
                          return false;
                      });
                  });