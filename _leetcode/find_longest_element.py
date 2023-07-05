# kategoriziraj riječi u mapi prema njhovim duljinama, npr rezultat[3] = ["sit","cum"...], bez duplikata.
#         ||
#         \/
def solve(ulazni_podatak):
    rezultat = {}
    text = ulazni_podatak.lower().replace(".", "").split(" ")
    for rijec in text:
        key = len(rijec)
        if key not in rezultat:
            rezultat[key] = []
        if rijec not in rezultat[key]:
            rezultat[key].append(rijec)
    # sad tražimo koja dužina riječi ima najviše riječi
    max_duljina = 0
    max_key = 0
    for key, value in rezultat.items():
        print(f" {key} {len(value)}")
        if len(value) >= max_duljina:
            max_duljina = len(value)
            max_key = key
    print(f"Najvise imamo rijeci s keyem {max_key} i s duljinom {max_duljina}")

    return rezultat


array = [
    "Lorem ipsum dolor sit amet. Cum libero quia id quod eaque ex illo voluptate. Ex quis molestiae eum cum officiis maiores qui eligendi nihil ab accusamus possimus ex voluptates consequuntur 33 quisquam dolorem sit voluptatibus consequatur.",
    "Nam porro error qui mollitia deserunt et ipsam odio. Est aspernatur excepturi est repudiandae consequuntur ut cum vitae ipsum. Ab perspiciatis temporibus ab exercitationem voluptas et cupiditate perferendis id quaerat maxime sed aspernatur rerum qui odio error sit consequatur galisum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco cum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

print(solve(array[0]))
