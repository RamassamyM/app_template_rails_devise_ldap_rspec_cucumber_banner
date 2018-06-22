//  adding sweet alert
//  see guides : https://sweetalert.js.org/guides/
// to use sweetalert : you dan add a data-swalcontent = {}
// in the hash you can define title, text, icon(success, error, info, warning )
// buttons see docs etc...

import swal from 'sweetalert';
function bindSweetAlertButton() {
  const swalButtonDemo = document.getElementById('sweet-alert-demo');
  if (swalButtonDemo) { // protect other pages
    swalButtonDemo.addEventListener('click', () => {
      swal({
        title: "A nice alert",
        text: "This is a great alert, isn't it?",
        icon: "success"
      });
    });
  }
  const swalButton = document.getElementById('sweet-alert');
  if (swalButton) { // protect other pages
      var swalContent = new Object();
      if (swalButton.dataset.swalcontent) {
        swalContent = JSON.parse(swalButton.dataset.swalcontent);
      } else {
        swalContent = {
          title: "A nice alert",
          text: "This is a great alert, isn't it?",
          icon: "success"
        };
      }
    swalButton.addEventListener('click', () => {
      swal(swalContent);
    });
  }
  const swalButtonDelete = document.getElementById('sweet-alert-delete-confirmation');
  if (swalButtonDelete) { // protect other pages
    swalButtonDelete.addEventListener('click', () => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => { // confihgure actions
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    });
  }
}

export { bindSweetAlertButton };
