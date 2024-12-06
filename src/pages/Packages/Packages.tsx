import Container from "../../components/modules/Container/Container"
import Title from "../../components/modules/Title/Title"
import { Button } from "../../components/shadcn/ui/button"

 
const Packages = () => {
  return (
    <Container>
      <div dir="rtl" className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-24 lg:!px-28">
      <Title title="پکیج ها" />

      <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,1fr,1fr] gap-16 sm:gap-10 mt-16">
            <div className="text-center border-main border rounded-md">
                <p className="py-5 bg-main text-white">پکیج طلایی</p>
                <p className="border-y py-5 border-gray-400">ریال</p>
                <p className="border-b py-5 border-gray-400">انتخاب حداکثر 4 رژیم</p>
                <p className="pt-5">120 هزار تومن</p>
                <Button className="w-[90%] my-8" variant="main">خرید</Button>
            </div>
            <div className="text-center border-main border rounded-md">
                <p className="py-5 bg-main text-white">پکیج طلایی</p>
                <p className="border-y py-5 border-gray-400">ریال</p>
                <p className="border-b py-5 border-gray-400">انتخاب حداکثر 4 رژیم</p>
                <p className="pt-5">120 هزار تومن</p>
                <Button className="w-[90%] my-8" variant="main">خرید</Button>
            </div>
            <div className="text-center border-main border rounded-md">
                <p className="py-5 bg-main text-white">پکیج طلایی</p>
                <p className="border-y py-5 border-gray-400">ریال</p>
                <p className="border-b py-5 border-gray-400">انتخاب حداکثر 4 رژیم</p>
                <p className="pt-5">120 هزار تومن</p>
                <Button className="w-[90%] my-8" variant="main">خرید</Button>
            </div>
      </div>
    </div>
    </Container>

  )
}

export default Packages
