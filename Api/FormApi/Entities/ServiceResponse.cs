namespace FormApi.Entities
{
    public class ServiceResponse<T>
    {
        public bool Sucess { get; set; }
        public string Mensage { get; set; }
        public T? Data { get; set; }
    }
}
