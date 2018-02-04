    var firstname = [];
    var middlename = [];
    var lastname = [];
        $('.fancy .slot').jSlots({
            number : 1,
            spinner : '#playFancy',
            loops : 4,
            onStart : function() {
                for (var i = 0; i < firstname.length; i++) {
                    $('.slot li').each(function() { 
                        if ($(this).text() == firstname[i]) $(this).remove();
                    });
                }
            },
            onEnd: function(n) {
                var e = n.shift();
                var o = $(".slot li").eq(e - 1).text();
                firstname.push(o);
            }
        });
        $('.fancy .middle-name').jSlots({
            number : 1,
            loops : 5,
            spinner : '#playFancy',
            onStart : function() {
                for (var i = 0; i < middlename.length; i++) {
                    $('.middle-name li').each(function() { 
                        if ($(this).text() == middlename[i]) $(this).remove();
                    });
                }
            },
            onEnd: function(n) {
                var e = n.shift();
                var o = $(".middle-name li").eq(e - 1).text();
                middlename.push(o);
            }
        });
        $('.fancy .last-name').jSlots({
            number : 1,
            spinner : '#playFancy',
            loops : 6,
            onStart : function() {
                for (var i = 0; i < lastname.length; i++) {
                    $('.last-name li').each(function() { 
                        if ($(this).text() == lastname[i]) $(this).remove();
                    });
                }
            },
           onEnd: function(n) {
                var e = n.shift();
                var o = $(".last-name li").eq(e - 1).text();
                lastname.push(o);
            }
        });