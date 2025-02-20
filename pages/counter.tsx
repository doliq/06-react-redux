import { useDispatch, useSelector } from "react-redux";
import { tambahCounter, kurangCounter } from "@/redux/counter/naikTurunSlice";

export default function CounterNaikTurun() {
    // kita pilih reducer counter yang telah di daftarkan pada store.js
    const {totalCounter} = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    function tombolTambah() {
        dispatch(tambahCounter())
    }

    function tombolKurang() {
        if(totalCounter > 0) {
            dispatch(kurangCounter())
        }else{
            alert('Minimal 0')
        }  
    }  
    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Total Mobil</div>
                        <div className="row">
                            <div className="col-1 mt-2">Jumlah : </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary"
                                onClick={() => tombolKurang()}> - </button>
                                <span className="form-control text-center">(totalCounter)</span>
                                <button className="btn btn-outline-success"
                                type="button" onClick={() => tombolTambah()}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}