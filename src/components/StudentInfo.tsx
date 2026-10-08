import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    

    <div className="flex-1 p-4">
      
      <Drawer direction="left">
        <DrawerTrigger render={<Button variant="outline" />}>Thammasorn Meethiang</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student Information</DrawerDescription>
          </DrawerHeader>
          
          <DrawerFooter>

            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      
    </div>

    
  );
}
