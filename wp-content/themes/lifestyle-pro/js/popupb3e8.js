(function($) {

    $(function() {
        $('#text').hide();
        $('.package1-icon').on('click', function(){
            $("#diagram div").removeClass('clicked'); // remove clicked from all cog-icons
            var el = $(this);
            $(this).toggleClass('clicked');
            $('#text').show();
            $('#text').html('<h3>Work package 1</h3><h4>Climate &amp; Environment</h4>Gathers data on climate, resources and the environment for different types of CFEs, identifying those systems with the most climate benefit in relation to other ecosystems services.<button>Close</button></div>');
        });
        $('.package2-icon').on('click', function(){
            $("#diagram div").removeClass('clicked');
            var el = $(this);
            $(this).toggleClass('clicked');
            $('#text').show();
            $('#text').html('<h3>Work package 2</h3><h4>Policy &amp; Governance</h4>Reviews the policy environment for different CFEs, identifying bottlenecks and opportunities across governance arrangements for network support, innovation and funding.<button>Close</button>');
        });
        $('.package3-icon').on('click', function(){
            $("#diagram div").removeClass('clicked');
            var el = $(this);
            $(this).toggleClass('clicked');
            $('#text').show();
            $('#text').html('<h3>Work package 3</h3><h4>Market, Consumers &amp; Business</h4>Identifies business and consumer perceptions and motivations, as well as determinants of success, and barriers to the development and professionalization of CFEs.<button>Close</button>');
        });
        $('.package4-icon').on('click', function(){
            $("#diagram div").removeClass('clicked');
            var el = $(this);
            $(this).toggleClass('clicked');
            $('#text').show();
            $('#text').html('<h3>Work package 4</h3><h4>Identifying Business Incubator Models</h4>Co-produces business incubator models that can support both established and start-up CFEs.<button>Close</button>');
        });
        $('.package5-icon').on('click', function(){
            $("#diagram div").removeClass('clicked');
            var el = $(this);
            $(this).toggleClass('clicked');
            $('#text').show();
            $('#text').html('<h3>Work package 5</h3><h4>Project Co-ordination &amp; Management</h4>Integrates all project activity and outputs with the involvement of project partners, and their associated communities of practice.<button>Close</button>');
        });

        $(document).on('click', 'button',function() {
            //('#text').empty();
            //$(this).hide();
            $(this).parent().empty();
            $('#text').hide();
            $("#diagram div").removeClass('clicked');
            return false;
        });
    });

})(jQuery);
