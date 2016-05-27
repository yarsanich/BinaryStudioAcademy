//main function
$(document).ready(function(){
    //add by enter
    $('#newTask').keyup(function(e)
    {
        if (e.keyCode === 13)
        {
          var text = $('#newTask').val();
              $("#todo-list").append('<li class="list-group-item"><input type="checkbox" class="toggle"/ ><span class="text">'
          + text + ' </span><button class="pull-righ clear"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button></li>');
          $("#newTask").val('');
        }
    });
    //button variant
    $('#submit').click(function(){
      var text = $('#newTask').val();
          $("#todo-list").append('<li class="list-group-item"><div class="checkbox-inline"><label><input type="checkbox" class="toggle"> <span class="text">'
      + text + ' </label></div></span><button class="pull-righ clear"><span class="glyphicon  glyphicon-remove " aria-hidden="true"></span></button></li>');
      $("#newTask").val('');
    });
    //remove button
    $(document).on('click','.clear', function(){
      $(this).parent().remove();
    });
    //toggle all tasks
    $("#toggle-all").click(function ()
    {
        $('input:checkbox').not(this).prop('checked', this.checked);
        if ( $('li').css('textDecoration') == 'line-through' )
        {
            $('li').css('textDecoration', 'none');
            $('li').parent().css('opacity', '1');
        }
        else
        {
            $('li').css('textDecoration', 'line-through');
            $('li').parent().css('opacity', '0.5');
        }
    });
    //single toggle
    $(document).on('click', '.toggle', function(){
      if ($(this).parent().css('textDecoration') == 'line-through')
      {
           $(this).parent().css('textDecoration', 'none');
           $(this).parent().css('opacity', '1');
      }
      else
      {
           $(this).parent().css('textDecoration', 'line-through');
           $(this).parent().css('opacity', '0.50');
      }
    });
    //clear completed tasks
    $("#clearcompleted").click(function(){
      $("#todo-list .toggle:checked").parent().remove();
    });
    $('#todo-list').on('dblclick', 'span', function ()
        {
            var thisData = this.innerHTML,
            $el = $('<input type="text" class="in-edit-text"/>');
            $(this).replaceWith($el);
            $el.val(thisData).focus();
            $(this).find(".text").hide();
            $(this).find(".clear").hide();
        }
    );
    //enter and esc events
    $('#todo-list').on('keyup', '.in-edit-text', (function(e)
    {
        if (e.keyCode === 13)
        {
            $(this).replaceWith($('<span class="text">' + $(this).val() + '</span>'));
        }
        if (e.keyCode == 27) {
            $('.in-edit-text').remove();
        }
    }));
});
